var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

// builder.Services.AddHealthChecks();
// builder.Services.AddMvc();
// builder.Services.AddControllers();

var app = builder.Build();

app.UseRouting();
// app.MapHealthChecks("api/proxy/healthz");
app.MapReverseProxy();

// app.UseHttpsRedirection();
// app.UseAuthorization();

app.Run();
