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
## Built with Ionic - React
Link to Figma: https://www.figma.com/file/3pebDmor5Z697n1IpySU8E/OpenGym

## To run:
- Clone the repository
- cd into OpenGym
 step 1: yarn
 step 2: ionic serve

## To create a new FE service:
dapr init 
- cd into Frontend
- yarn compile, pointing to the new service config codegen file

## To create a new BE service:
- cd into Backend
- mkdir newService and cd into it
- eg. in Catalog: dotnet new webapi -o Catalog.API 
- https://learn.microsoft.com/en-us/azure/active-directory-b2c/enable-authentication-web-api?tabs=csharpclient
# Ref BE Architecture
https://github.com/dotnet-architecture/eShopOnDapr

## Strongly inspired by: https://github.com/dotnet-architecture/eShopOnDapr/blob/dd60f7042c891e1cea67a487e1cf048ab6c3ce76/docs/run-eshop.md#run-eshopondapr-on-azure-container-apps
## Run on Azure Container Apps

Run the following commands from the `deploy\containerapps` folder to start install using the Azure CLI:

```terminal
az group create --name opengym --location westeurope
az deployment group create --resource-group opengym --template-file main.bicep
```

# Health UI:

# ```terminal
# az containerapp show --name webstatus --resource-group opengym --query "properties.configuration.ingress.fqdn" --output tsv
# ```

git config --global user.name "" && git config --global user.email "youremail@yourdomain.com"


# To explore the GraphQL HotChocolate API
Install and use banana cake pop http://chillicream.com/docs/bananacakepop/v2/install
