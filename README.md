### Schools API

The goal of this project is to add schools with their name,address,latitude and longtitude.

And based on particular  latitude and longtitude we should be able to get schools in that latitude and longtitude's proximity.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MySQL URL`



## Documentation

[Documentation](https://linktodocumentation)


## API Reference

#### Add school

```http
  POST /api/addSchool
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required**. Name of school|
| `address` | `string` | **Required**. Address of school|
| `latitude`| `float` | **Required**. latitude in float|
| `longitude`| `float` | **Required**. longitude in float|

#### Get item

```http
  GET /api/listSchools?latitude=&longitude=
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `latitude`| `float` | **Required**.  |
| `longitude`| `float` | **Required**.  |

Fetches all the schools present in DB and sorts them based on least distance from the inputted lat & lon
#### 




## Local Machine

To run this project locally just clone this repo and add .env files

```bash
  git clone repo_link
```
 
```bash
  npm run dev
```

