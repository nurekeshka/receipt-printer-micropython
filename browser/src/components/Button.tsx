import "./Button.css";

export enum Item {
  LUXURY_BASKET_MIX = "LUXURY_BASKET_MIX",
  BASIC_REGRET_COMBO = "BASIC_REGRET_COMBO",
  PASSIVE_AGGRESSIVE_PEACE = "PASSIVE_AGGRESSIVE_PEACE",
  GUILT_TRIP_SPECIAL = "GUILT_TRIP_SPECIAL",
  LOVE_BOMB_LUXE = "LOVE_BOMB_LUXE",
}

interface ButtonProps {
  type: Item;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Button(props: Readonly<ButtonProps>) {
  const titles: { [key in Item]: string } = {
    [Item.LUXURY_BASKET_MIX]: "LUXURY BASKET MIX",
    [Item.BASIC_REGRET_COMBO]: "BASIC REGRET COMBO",
    [Item.PASSIVE_AGGRESSIVE_PEACE]: "PASSIVE AGGRESSIVE PEACE",
    [Item.GUILT_TRIP_SPECIAL]: "GUILT TRIP SPECIAL",
    [Item.LOVE_BOMB_LUXE]: "LOVE BOMB LUXE",
  };

  const click = async () => {
    props.setLoading(true);

    const res = await fetch("http://localhost:8000/api/receipt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ choice: props.type }),
    });

    console.log(await res.json());
    props.setLoading(false);
  };

  return (
    <button className="border-0 rounded text-white px-3 py-2" onClick={click}>
      {titles[props.type]}
    </button>
  );
}

export default Button;
