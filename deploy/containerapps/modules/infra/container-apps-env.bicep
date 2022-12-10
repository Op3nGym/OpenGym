param location string
param uniqueSeed string
param containerAppsEnvironmentName string = 'containerappenv-${uniqueString(uniqueSeed)}'
param logAnalyticsWorkspaceName string = 'loganalytics-${uniqueString(uniqueSeed)}'

resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: logAnalyticsWorkspaceName
  location: location
  properties: any({
    retentionInDays: 7
    sku: {
      name: 'Free'
    }
  })
}

resource containerAppsEnvironment 'Microsoft.App/managedEnvironments@2022-06-01-preview' = {
  name: containerAppsEnvironmentName
  location: location
  properties: {
    appLogsConfiguration: {
      destination: 'log-analytics'
      logAnalyticsConfiguration: {
        customerId: logAnalyticsWorkspace.properties.customerId
        sharedKey: logAnalyticsWorkspace.listKeys().primarySharedKey
      }
    }
  }
}

output id string = containerAppsEnvironment.id
output name string = containerAppsEnvironmentName
output domain string = containerAppsEnvironment.properties.defaultDomain
