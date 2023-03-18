using Gym.API.DTOs;
using Gym.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Gym.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SubscriptionsController : ControllerBase
{
    private readonly SubscriptionService _subscriptionService;

    public SubscriptionsController(SubscriptionService subscriptionService)
    {
        _subscriptionService = subscriptionService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<SubscriptionDTO>>> GetSubscriptions()
    {
        return Ok(await _subscriptionService.GetAllAsync());
    }

    // Implement other methods for GetSubscriptionById, CreateSubscription, UpdateSubscription, DeleteSubscription
    [HttpGet("{id}")]
    public async Task<ActionResult<SubscriptionDTO>> GetSubscriptionById(int id)
    {
        var subscription = await _subscriptionService.GetByIdAsync(id);
        if (subscription == null)
        {
            return NotFound();
        }
        return Ok(subscription);
    }

    [HttpPost]
    public async Task<ActionResult<SubscriptionDTO>> CreateSubscription(SubscriptionDTO subscriptionDTO)
    {
        await _subscriptionService.AddAsync(subscriptionDTO);
        return CreatedAtAction(nameof(GetSubscriptionById), new { id = subscriptionDTO.Id }, subscriptionDTO);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateSubscription(int id, SubscriptionDTO subscriptionDTO)
    {
        if (id != subscriptionDTO.Id)
        {
            return BadRequest();
        }
        await _subscriptionService.UpdateAsync(subscriptionDTO);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteSubscription(int id)
    {
        var subscription = await _subscriptionService.GetByIdAsync(id);
        if (subscription == null)
        {
            return NotFound();
        }
        await _subscriptionService.DeleteAsync(id);
        return NoContent();
    }
}