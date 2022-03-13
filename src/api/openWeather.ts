const url = "https://api.openweathermap.org/data/2.5/weather?q=";

export const getLocaleWeather = async (city: string) => {
  const response = await fetch(
    `${url}${city}&appid=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  return data;
};
