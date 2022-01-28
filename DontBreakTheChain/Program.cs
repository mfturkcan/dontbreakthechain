using DontBreakTheChain.DataAccess;
using DontBreakTheChain.Models;
using DontBreakTheChain.Services;
using DontBreakTheChain.Services.Implementations;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
IConfiguration Configuration = builder.Configuration;

// Add services to the container.

builder.Services.AddControllers().AddNewtonsoftJson(option =>
{
    option.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
});

// ServiceProvider serviceProvider = builder.Services.BuildServiceProvider();
//var logger = serviceProvider.GetServices<ILogger<User>>();

builder.Services.AddLogging(options =>
{
    options.AddConsole();
    options.AddDebug();
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

builder.Services.AddDbContext<ChainDbContext>(opt =>
{
    opt.UseSqlServer(Configuration.GetConnectionString("Default"));
});

builder.Services.AddIdentity<User, IdentityRole>()
    .AddEntityFrameworkStores<ChainDbContext>();

builder.Services.Configure<IdentityOptions>(options =>
{
    options.User.RequireUniqueEmail = true;
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
        builder =>
        {
            builder.AllowAnyHeader();
            builder.AllowCredentials();
            builder.AllowAnyMethod();
            builder.SetIsOriginAllowed(host => true);
        });
});

// For Cookie Authentication
//builder.Services.AddAuthentication(options =>
//{
//    options.DefaultScheme = "Cookies";
//}).AddCookie("Cookies", options =>
//{
//    options.Cookie.Name = "auth_cookie";
//    options.Cookie.SameSite = SameSiteMode.None;
//    options.Events = new CookieAuthenticationEvents
//    {
//        OnRedirectToLogin = redirectContext =>
//        {
//            redirectContext.HttpContext.Response.StatusCode = 401;
//            return Task.CompletedTask;
//        }
//    };
//});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt =>
    {
        opt.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWTSettings:TokenKey"]))
        };
    });

builder.Services.AddAuthorization();

builder.Services.AddScoped<IChainService, ChainService>();
builder.Services.AddScoped<IChainPartsService, ChainPartsService>();
builder.Services.AddScoped<TokenService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}

app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
