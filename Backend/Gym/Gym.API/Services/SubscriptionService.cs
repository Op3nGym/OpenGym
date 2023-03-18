namespace Gym.API.Services;

using Gym.API.DTOs;
using Gym.Domain.Repositories;
using Mapster;

public class SubscriptionService
{
    private readonly ISubscriptionRepository _subscriptionRepository;

    public SubscriptionService(ISubscriptionRepository subscriptionRepository)
    {
        _subscriptionRepository = subscriptionRepository;
    }

    public async Task<IEnumerable<SubscriptionDTO>> GetAllAsync()
    {
        var subscriptions = await _subscriptionRepository.GetAllAsync();
        return subscriptions.Adapt<IEnumerable<SubscriptionDTO>>();
    }

    public async Task<SubscriptionDTO> GetByIdAsync(int id)
    {
        var subscription = await _subscriptionRepository.GetByIdAsync(id);
        return subscription.Adapt<SubscriptionDTO>();
    }

    public async Task AddAsync(SubscriptionDTO subscriptionDTO)
    {
        var subscription = subscriptionDTO.Adapt<Domain.Entities.Subscription>();
        await _subscriptionRepository.AddAsync(subscription);
        await _subscriptionRepository.SaveChangesAsync();
    }

    public Task UpdateAsync(SubscriptionDTO subscriptionDTO)
    {
        var subscription = subscriptionDTO.Adapt<Domain.Entities.Subscription>();
        _subscriptionRepository.Update(subscription);
        return _subscriptionRepository.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var subscription = await _subscriptionRepository.GetByIdAsync(id);
        _subscriptionRepository.Remove(subscription);
        await _subscriptionRepository.SaveChangesAsync();
    }
}