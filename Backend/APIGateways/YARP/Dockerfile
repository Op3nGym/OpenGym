FROM mcr.microsoft.com/dotnet/aspnet:7.0-jammy AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0-jammy AS build
WORKDIR /Backend
COPY ["Backend/APIGateways/YARP/YARP.csproj", "Backend/APIGateways/YARP/"]
RUN dotnet restore "YARP.csproj"
COPY . .
WORKDIR "/Backend/Backend/APIGateways/YARP"
# RUN dotnet build "AKS.Three.Tier.App.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish --no-restore "AKS.Three.Tier.App.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AKS.Three.Tier.App.API.dll"]