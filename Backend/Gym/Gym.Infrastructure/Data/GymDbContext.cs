using Gym.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Gym.Infrastructure.Data;

public class GymDbContext : DbContext
{
    public DbSet<Domain.Entities.Gym> Gyms { get; set; }
    public DbSet<Subscription> Subscriptions { get; set; }

    public GymDbContext(DbContextOptions<GymDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Domain.Entities.Gym>(entity =>
        {
            entity.HasKey(g => g.Id);
            entity.Property(g => g.Name).IsRequired();
            entity.Property(g => g.Address).IsRequired();
            entity.Property(g => g.OwnerId).IsRequired();
        });

        modelBuilder.Entity<Subscription>(entity =>
        {
            entity.HasKey(s => s.Id);
            entity.Property(s => s.GymId).IsRequired();
            entity.Property(s => s.CustomerId).IsRequired();
            entity.Property(s => s.StartDate).IsRequired();
            entity.Property(s => s.EndDate).IsRequired();

            entity.HasOne(s => s.Gym)
                .WithMany(g => g.Subscriptions)
                .HasForeignKey(s => s.GymId);
        });
    }
}