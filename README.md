# onlinesales.admin
React based Admin UI for OnlineSales (lightweight, extendable headless CMS for product websites)

## Shell application

Front End part of the CMS admin UI consists of the Shell application that implements the Core functionality of the CMS, as well as a mechanism for dynamic loading plugins with additional functionality.

The process of loading plugins and the programming interface that they implement is unified, which allows you to create plugins without changing the code of the Shell application.

## Plugin

Plugins allow you to expand the Core functionality of the CMS.

A plugin is a set of executable modules for BE and FE parts.

Executable modules of BE part of the plugin are placed in the CMS Core directory to be loaded by the application server at startup.

Executable modules of FE part are placed in the CMS Core directory intended to work with static Web content.

To configure available plugins, a manifest file is created, which contains a list of plugins and their settings.

## Downloading plugins by the Shell application

Being loaded in a browser the Shell application performs a request to the SMC Core server to get the plugins manifest file.

Based on the information in the manifest file the Shell application loads plugin module, applies settings, adds links to the navigation menu, etc.

## Developing

The Shell application and plugins UI are written in React. Webpack Module Federation is used as the technology to load plugin modules in the runtime.

The source code of a plugin is a mono-repository containing projects for BE and FE parts.

To develop the FE part of the plugin, an SDK (template project) is used, containing all the necessary dependencies and basic configuration for the current version of the Shell application (types and interfaces, shared components library, design system, libs for working with queries, authorization, state, etc.)
