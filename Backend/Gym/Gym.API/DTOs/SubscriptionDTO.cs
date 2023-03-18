namespace Gym.API.DTOs;

public class SubscriptionDTO
{
    public int Id { get; set; }
    public int GymId { get; set; }
    public string CustomerId { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
}
