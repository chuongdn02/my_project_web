using Login_logout.Sessions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Login_logout.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<Login_logoutContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Login_logoutContext") ?? throw new InvalidOperationException("Connection string 'Login_logoutContext' not found.")));

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddSession();
builder.Services.AddScoped<IAccountServices, AccountServices>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.UseSession(); 
app.UseHttpsRedirection();
app.UseRouting();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Account}/{action=Index}/{id?}");

app.Run();
