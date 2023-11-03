export type PlanetInfo = {
  distance_light_year: number;
  host_star_mass: number;
  host_star_temperature: number;
  mass: number;
  name: string;
  period: number;
  radius: number;
  semi_major_axis: number;
};

export const fetchPlanet = async (name: string): Promise<PlanetInfo> => {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/planets?name=${name}`,
    {
      headers: {
        "X-Api-Key": "jvMqsIO/2wq4QwzuP5CTFw==rJLSs49v8HtDCK78",
      },
    }
  );

  const data = await response.json();
  return data;
};
