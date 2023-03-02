# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/aspnet:7.0-jammy AS base
WORKDIR /app
EXPOSE 80

ENV ASPNETCORE_URLS=http://+:80

FROM mcr.microsoft.com/dotnet/sdk:7.0-jammy AS build
WORKDIR /src
COPY *.csproj .
RUN dotnet restore "Catalog.API.csproj"

# COPY EVERYTHING ELSE
COPY . .
RUN dotnet build "Catalog.API.csproj" -c Release -o /app/build

# copy everything else and build app
FROM build AS publish
RUN dotnet publish -c Release -o /app/publish --self-contained false --no-restore

# final stage/image
FROM base as final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Catalog.API.dll"]