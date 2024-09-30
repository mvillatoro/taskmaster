import { createClient } from "../../../utils/supabase/static-props";
import { CountryList } from "./CountryList";
import { Country } from "./countryTypes";

const fetchCountries = async () => {
  const supabase = createClient();
  return await supabase.from("countries").select();
};

export default async function HomePage() {
  const { data: countries, error } = await fetchCountries();
  console.log({ countries });

  console.log({ error });
  return (
    <div>
      <p>HOME</p>
      <CountryList countries={countries as Array<Country>} />
    </div>
  );
}
