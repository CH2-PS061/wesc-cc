# WildExplorer's Companion (WE’sC)

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/149871363?s=400&u=692281d20065e19dd8d1ebaa4f60512d48843b6a&v=4" />
</p>

Wilderness survival emergency application is a vital resource for outdoor enthusiasts exploring wild forests. It offers three core features: a comprehensive wilderness survival guide, a first aid module, and an innovative object recognition system for edible wild plants. The survival guide equips users with essential knowledge on shelter building, fire-making, water purification, and navigation, all accessible offline. The first aid module provides step-by-step instructions for treating wilderness-related injuries. Most notably, the object recognition feature uses image recognition technology to identify edible wild plants, enabling users to make informed foraging decisions. This application is an indispensable companion for those venturing into the wilderness, ensuring they have the tools and knowledge to survive and thrive in the wild.

## How to Start the Project

```
npm install
```

```
npm run start
```

## API Spec

- [Users API](#users-api)
  - [POST /v1/users/register](#post-v1usersregister)
  - [POST /v1/users/login](#post-v1userslogin)
  - [PATCH /v1/users/change-password/](#patch-v1userschange-password)
  - [DELETE /v1/users/delete](#delete-v1usersdelete)
- [Feature API](#feature-api)
  - [GET /v1/feature/survival-guide](#get-v1featuresurvival-guide)
  - [GET /v1/feature/first-aid](#get-v1featurefirst-aid)
  - [GET /v1/feature/edible-plant](#get-v1featureedible-plant)
- [Admin API](#admin-api)
  - Survival Guide
    - [POST /v1/feature/survival-guide](#post-v1featuresurvival-guide)
    - [PUT /v1/feature/survival-guide](#put-v1featuresurvival-guideid)
    - [DELETE /v1/feature/survival-guide](#delete-v1featuresurvival-guideid)
  - First Guide
    - [POST /v1/feature/first-aid](#post-v1featurefirst-aid)
    - [PUT /v1/feature/first-aid](#put-v1featurefirst-aidid)
    - [DELETE /v1/feature/first-aid](#delete-v1featurefirst-aidid)

## Users API

### POST /v1/users/register

**Request :**

- Header
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "role" : "string" #optional : default("user")
}
```

**Response Success:**

- Body :

```json
{
  "success": "boolean",
  "message": "string",
  "data": {
    "id": "integer",
    "email": "string",
    "name": "string"
  }
}
```

**Response Error**

- Body :

```json
{
  "success": "boolean",
  "message": "string"
}
```

##

### POST /v1/users/login

**Request:**

- Header
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "email": "string",
  "password": "string"
}
```

**Response Success:**

- Body

```json
{
  "success": "boolean",
  "message": "string",
  "data": {
    "id": "integer",
    "email": "string",
    "name": "string",
    "token": "string"
  }
}
```

**Response Error**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

##

### PATCH /v1/users/change-password

**Request:**

- Header
  - Content-Type: application/json
  - Accept: application/json
  - X-Auth-Token : "secret api token/key"
- Body

```json
{
  "email": "string",
  "currentPassword": "string",
  "newPassword": "string"
}
```

**Response Success:**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

**Response Error**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

##

### DELETE /v1/users/delete

**Request:**

- Header
  - Content-Type: application/json
  - Accept: application/json
  - X-Auth-Token : "secret api token/key"
- Body

```json
{
  "email": "string",
  "password": "string"
}
```

**Response Success:**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

**Response Error**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

# Feature API

### Note: The Feature API is not fixed yet and subject to change

##

### GET /v1/feature/survival-guide

**Request:**

- Header
  - Content-Type: application/json
  - Accept: application/json
  - X-Auth-Token : "secret api token/key"

**Response Success:**

- Body

```json
{
  "success": "boolean",
  "message": "string",
  "data": [
    {
      "id": "integer",
      "name": "string",
      "url_markdown": "string"
    }
    {
      "id": "integer",
      "name": "string",
      "url_markdown": "string"
    }
  ]
}
```

**Response Error**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

##

### GET /v1/feature/first-aid

**Request:**

- Header
  - Content-Type: application/json
  - Accept: application/json
  - X-Auth-Token : "secret api token/key"

**Response Success:**

- Body

```json
{
  "success": "boolean",
  "message": "string",
  "data": [
      {
      "id": "integer",
      "name": "string",
      "url_markdown": "string"
    }
    {
      "id": "integer",
      "name": "string",
      "url_markdown": "string"
    }
  ]
}
```

**Response Error**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

##

### GET /v1/feature/edible-plant

**Request:**

- Header
  - Content-Type: application/json
  - Accept: application/json
  - X-Auth-Token : "secret api token/key"

**Response Success:**

- Body

```json
{
  "success" : "boolean",
  "message": "string",
  "data": [
    {
    "plant_id": "string",
    "name": "string",
    "description": "string",
    "createdAt" : "date",
    "updatedAt" : "date"
    }
    {
    "plant_id": "string",
    "name": "string",
    "description": "string",
    "createdAt" : "date",
    "updatedAt" : "date"
    }
  ]
}
```

**Response Error**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

# Admin API

### Note : Admin Role is needed for access this API

# Survival Guide

### POST /v1/feature/survival-guide

**Request:**

- Header

  - Content-Type: application/json
  - Accept: application/json
  - X-Auth-Token : "secret api token/key"

- Body

```json
{
  "name": "string",
  "url_markdown": "string",
  "email": "string"
}
```

**Response Success:**

- Body

```json
{
  "success": "boolean",
  "message": "string",
  "data": {
    "id": "integer",
    "name": "string",
    "url_markdown": "string"
  }
}
```

**Response Error**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

##

### PUT /v1/feature/survival-guide/:id

**Request:**

- Header

  - Content-Type: application/json
  - Accept: application/json
  - X-Auth-Token : "secret api token/key"

- Body

```json
{
  "name": "string",
  "url_markdown": "string",
  "email": "string"
}
```

**Response Success:**

- Body

```json
{
  "success": "boolean",
  "message": "string",
  "data": {
    "id": "integer",
    "name": "string",
    "url_markdown": "string"
  }
}
```

**Response Error**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

##

### DELETE /v1/feature/survival-guide/:id

**Request:**

- Header

  - Content-Type: application/json
  - Accept: application/json
  - X-Auth-Token : "secret api token/key"

**Response Success:**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

**Response Error**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

# First Aid

### POST /v1/feature/first-aid

**Request:**

- Header

  - Content-Type: application/json
  - Accept: application/json
  - X-Auth-Token : "secret api token/key"

- Body

```json
{
  "name": "string",
  "url_markdown": "string",
  "email": "string"
}
```

**Response Success:**

- Body

```json
{
  "success": "boolean",
  "message": "string",
  "data": {
    "id": "integer",
    "name": "string",
    "url_markdown": "string"
  }
}
```

**Response Error**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

##

### PUT /v1/feature/first-aid/:id

**Request:**

- Header

  - Content-Type: application/json
  - Accept: application/json
  - X-Auth-Token : "secret api token/key"

- Body

```json
{
  "name": "string",
  "url_markdown": "string",
  "email": "string"
}
```

**Response Success:**

- Body

```json
{
  "success": "boolean",
  "message": "string",
  "data": {
    "id": "integer",
    "name": "string",
    "url_markdown": "string"
  }
}
```

**Response Error**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

##

### DELETE /v1/feature/first-aid/:id

**Request:**

- Header

  - Content-Type: application/json
  - Accept: application/json
  - X-Auth-Token : "secret api token/key"

**Response Success:**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

**Response Error**

- Body

```json
{
  "success": "boolean",
  "message": "string"
}
```

##
