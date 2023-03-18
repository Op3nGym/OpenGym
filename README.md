# OpenGym - Your best tool to manage your GYM

## Architecture image
![Architecture](docs/Architecture/Opengym-Architecture.svg)

## Domains mermaid diagram
```mermaid
erDiagram
    GYM ||--|{ SUBSCRIPTION : has
    GYM ||--o{ GYM_TEACHER : associated
    TEACHER ||--|{ COURSE : teaches
    TEACHER ||--o{ GYM_TEACHER : associated
    TEACHER ||--o{ BOOKING : booked_with
    COURSE ||--|{ PRICING_MODEL : has
    CUSTOMER ||--|{ SUBSCRIPTION : purchased_by
    CUSTOMER ||--o{ BOOKING : booked_by
    BOOKING ||--|{ COURSE : booked_for

    GYM {
        int GymId
        string Name
        string Address
        string GymOwnerId
    }
    TEACHER {
        int TeacherId
        string UserId
        string Bio
    }
    COURSE {
        int CourseId
        int TeacherId
        string Title
        string Description
    }
    PRICING_MODEL {
        int PricingId
        int CourseId
        decimal Price
        int PackageSize
        decimal Discount
    }
    CUSTOMER {
        int CustomerId
        string UserId
    }
    SUBSCRIPTION {
        int SubscriptionId
        int CustomerId
        int GymId
        datetime StartDate
        datetime EndDate
    }
    BOOKING {
        int BookingId
        int CustomerId
        int TeacherId
        int CourseId
        datetime StartTime
        datetime EndTime
    }
    GYM_TEACHER {
        int GymId
        int TeacherId
    }
```
## Figma that we could possibly use but we don't have the time
Link to Figma: https://www.figma.com/file/3pebDmor5Z697n1IpySU8E/OpenGym

## To run:
- Clone and load the project the devcontainer in vscode or in a codespace
- f5