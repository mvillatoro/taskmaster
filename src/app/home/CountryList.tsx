"use client";

import { Country } from "./countryTypes";
import { useEffect, useState } from "react";

type CountryListProps = {
  countries: Array<Country>;
};

export const CountryList = (props: CountryListProps) => {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    // Sample fetch request using GET method
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET", // Explicitly using GET method
      headers: {
        "Content-Type": "application/json", // Optional headers (if required)
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Parse the JSON from the response
      })
      .then((data) => {
        setMockData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div>
      <p>Data del API JSON PLACE HOLDER</p>
      <div>{JSON.stringify(mockData)}</div>

      <p>Country List from Supabase ( Server Side RENDERED ) </p>
      <ul>
        {props?.countries.map((country, index) => {
          return <li key={index}>{country.name}</li>;
        })}
      </ul>
    </div>
  );
};
