using Gym.Domain.Entities;
using Gym.Domain.Repositories;
using Gym.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Gym.Infrastructure.Repositories;

public class SubscriptionRepository : ISubscriptionRepository
{
    private readonly GymDbContext _context;

    public SubscriptionRepository(GymDbContext context)
    {
        _context = context;
    }

    public async Task AddAsync(Subscription subscription)
    {
        await _context.Subscriptions.AddAsync(subscription);
    }

    public async Task<IEnumerable<Subscription>> GetAllAsync()
    {
        return await _context.Subscriptions.Include(s => s.Gym).ToListAsync();
    }

    public async Task<Subscription?> GetByIdAsync(int id)
    {
        return await _context.Subscriptions.Include(s => s.Gym).FirstOrDefaultAsync(s => s.Id == id);
    }

    public void Update(Subscription subscription)
    {
        _context.Entry(subscription).State = EntityState.Modified;
    }

    public void Remove(Subscription subscription)
    {
        _context.Subscriptions.Remove(subscription);
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}