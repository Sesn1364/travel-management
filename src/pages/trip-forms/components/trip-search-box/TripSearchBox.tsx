// Trip Search Box

import { useState } from "react";
import Button from "../../../../components/common/button/Button";

type Props = {
  onSearch: (filters: {
    name: string;
    country: string;
  }) => void;
};

const TripSearchBox = ({ onSearch }: Props) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const handleSearch = () => {
    onSearch({
      name,
      country,
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <input
        type="text"
        placeholder="جستجو بر اساس نام سفر ..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 px-4 py-3 rounded-2xl border border-gray-200 bg-white/80 focus:ring-2 focus:ring-sky-400"
      />

      <input
        type="text"
        placeholder="جستجو بر اساس کشور ..."
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="flex-1 px-4 py-3 rounded-2xl border border-gray-200 bg-white/80 focus:ring-2 focus:ring-sky-400"
      />

      <Button
        type="button"
        onClick={handleSearch}
        className="bg-sky-500 hover:bg-sky-600"
      >
        جستجو
      </Button>
    </div>
  );
};

export default TripSearchBox;