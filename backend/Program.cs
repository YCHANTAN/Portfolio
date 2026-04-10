using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddOpenApi();

// Configure EF Core with PostgreSQL
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<PortfolioDbContext>(options =>
    options.UseNpgsql(connectionString));

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    
    // Automatically apply migrations and seed data in development
    using (var scope = app.Services.CreateScope())
    {
        var db = scope.ServiceProvider.GetRequiredService<PortfolioDbContext>();
        db.Database.Migrate();
        SeedData(db);
    }
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");

// --- API Endpoints ---

// Projects
app.MapGet("/api/projects", async (PortfolioDbContext db) => 
    await db.Projects.ToListAsync());

// Skills
app.MapGet("/api/skills", async (PortfolioDbContext db) => 
    await db.SkillCategories.Include(c => c.Skills).ToListAsync());

// Contact Form
app.MapPost("/api/contact", async (PortfolioDbContext db, ContactMessage message) => 
{
    message.CreatedAt = DateTime.UtcNow;
    db.ContactMessages.Add(message);
    await db.SaveChangesAsync();
    return Results.Ok(new { success = true, message = "Message received!" });
});

app.Run();

// --- Seed Data Helper ---
void SeedData(PortfolioDbContext db)
{
    if (db.Projects.Any()) return;

    db.Projects.AddRange(
        new Project
        {
            Title = "Full-Stack Student Registration App",
            Description = "A comprehensive registration system featuring a responsive frontend and a secure relational database backend for seamless student record management.",
            TechStack = new() { "React", "TypeScript", "Tailwind CSS", "Node.js", "SQLite" }
        },
        new Project
        {
            Title = "AI-Assisted Marine Biodegradation",
            Description = "Research initiative focusing on the AI-assisted biodegradation of synthetic polymers in marine environments, modeling complex ecological interactions.",
            TechStack = new() { "Data Analysis", "Environmental Science", "Algorithmic Modeling" }
        },
        new Project
        {
            Title = "In Silico Antifungal Molecule Design",
            Description = "Computational biology research designing novel antifungal molecules against Candida auris using advanced in silico modeling techniques.",
            TechStack = new() { "Bioinformatics", "Computational Modeling", "Research" }
        },
        new Project
        {
            Title = "EducAIte: AI-Powered Learning Platform",
            Description = "An innovative learning platform that leverages AI to provide personalized educational experiences and adaptive learning paths.",
            TechStack = new() { "AI/ML", "React", "TypeScript", "Node.js", "C# .NET", "Tailwind CSS" }
        },
        new Project
        {
            Title = "Maharlika Banking System",
            Description = "A modern banking system designed to provide seamless financial services with a focus on security and user experience.",
            TechStack = new() { "Python", "SQL Server", "React", "TypeScript", "Tailwind CSS" }
        },
        new Project
        {
            Title = "POS System for Small Businesses",
            Description = "A streamlined point-of-sale system tailored for small businesses, offering intuitive management and real-time inventory tracking.",
            TechStack = new() { "C# .NET", "SQL Server", "React", "TypeScript", "Vanilla CSS" }
        }
    );

    var frontend = new SkillCategory { Title = "Frontend" };
    frontend.Skills.AddRange(new[] { 
        new Skill { Name = "TypeScript" }, 
        new Skill { Name = "React" }, 
        new Skill { Name = "Tailwind CSS" }, 
        new Skill { Name = "HTML5/CSS3" }, 
        new Skill { Name = "UI/UX Design" } 
    });

    var backend = new SkillCategory { Title = "Backend & Database" };
    backend.Skills.AddRange(new[] { 
        new Skill { Name = "C#" }, 
        new Skill { Name = " .NET 8" }, 
        new Skill { Name = "Node.js" }, 
        new Skill { Name = "PostgreSQL" }, 
        new Skill { Name = "SQLite" } 
    });

    var tools = new SkillCategory { Title = "Tools & Methodologies" };
    tools.Skills.AddRange(new[] { 
        new Skill { Name = "Git / GitHub" }, 
        new Skill { Name = "RESTful APIs" }, 
        new Skill { Name = "Agile Development" }, 
        new Skill { Name = "Data Analysis" }, 
        new Skill { Name = "In Silico Modeling" } 
    });

    db.SkillCategories.AddRange(frontend, backend, tools);
    db.SaveChanges();
}
