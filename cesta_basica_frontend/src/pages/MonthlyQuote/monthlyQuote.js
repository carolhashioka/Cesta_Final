import React, { useState, useEffect } from "react";
import api from "../../Services/api";
import { userLocal } from "../../Services/auth";
import Navigation from "../../components/Navigation/navigation";
import { Container } from "./styles";
export default function MonthlyQuote({ history }) {
  //Criar o useState
  const [month, setMonth] = useState("");
  const [commerces, setCommerces] = useState([]);
  const [commerce, setCommerce] = useState("");
  const [user, setUser] = useState("");
  const [meat, setMeat] = useState("");
  const [milk, setMilk] = useState("");
  const [beans, setBeans] = useState("");
  const [rice, setRice] = useState("");
  const [flour, setFlour] = useState("");
  const [potato, setPotato] = useState("");
  const [tomato, setTomato] = useState("");
  const [bread, setBread] = useState("");
  const [coffee, setCoffee] = useState("");
  const [banana, setBanana] = useState("");
  const [sugar, setSugar] = useState("");
  const [oil, setOil] = useState("");
  const [butter, setButter] = useState("");
  //Quando  MonthlyQuote for renderizado, será feito isso:
  useEffect(() => {
    const populateComerces = async () => {
      const response = await api.get("/commerce");
      setCommerces(response.data);

      const { _id } = userLocal();
      setUser(_id);
    };
    populateComerces();
  }, []);

  async function handleSubmit(evento) {
    evento.preventDefault();

    try {
      //Criar const
      const monthlyquote = {
        user,
        commerce,
        month,
        meat,
        milk,
        beans,
        rice,
        flour,
        potato,
        tomato,
        bread,
        coffee,
        banana,
        sugar,
        oil,
        butter
      };
      //Cadastrar monthlyquote na API
      await api.post("/monthlyquote", monthlyquote);
      //Depois de cadastrar, voltar ao menu
      history.push("/menu");
    } catch (error) {
      alert("Invalid");
    }
  }

  return (
    <Container>
      <Navigation />
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h1>Monthly Quote</h1>
        </div>
        <div className="commerce">
          <label htmlFor="commerce">Commerce:</label>
          <select
            className="commerce"
            id="commerce"
            required
            onChange={e => setCommerce(e.target.value)}
          >
            {commerces &&
              commerces.map(({ _id, name, cnpj }) => (
                <option key={_id} value={_id}>
                  {name} - {cnpj}
                </option>
              ))}
          </select>
        </div>

        <div className="month">
          <label htmlFor="month">Month:</label>
          <input
            id="month"
            className="inputm"
            type="month"
            required
            placeholder="Type the month"
            value={month}
            onChange={e => setMonth(e.target.value)}
          />
        </div>
        <div className="meat">
          <label htmlFor="meat"> Meat Price:</label>
          <input
            id="meat"
            type="Number"
            required
            value={meat}
            onChange={e => setMeat(Number(e.target.value))}
          />
        </div>
        <div className="milk">
          <label htmlFor="milk"> Milk Price:</label>
          <input
            id="milk"
            type="Number"
            required
            value={milk}
            onChange={e => setMilk(Number(e.target.value))}
          />
        </div>
        <div className="beans">
          <label htmlFor="beans"> Beans Price:</label>
          <input
            id="beans"
            type="Number"
            required
            value={beans}
            onChange={e => setBeans(Number(e.target.value))}
          />
        </div>
        <div className="rice">
          <label htmlFor="rice"> Rice Price:</label>
          <input
            id="rice"
            type="Number"
            required
            value={rice}
            onChange={e => setRice(Number(e.target.value))}
          />
        </div>
        <div className="flour">
          <label htmlFor="flour"> Flour Price:</label>
          <input
            id="flour"
            type="Number"
            required
            value={flour}
            onChange={e => setFlour(Number(e.target.value))}
          />
        </div>
        <div className="potato">
          <label htmlFor="potato"> Potato Price:</label>
          <input
            id="potato"
            type="Number"
            required
            value={potato}
            onChange={e => setPotato(Number(e.target.value))}
          />
        </div>
        <div className="tomato">
          <label htmlFor="tomato"> Tomato Price:</label>
          <input
            id="tomato"
            type="Number"
            required
            value={tomato}
            onChange={e => setTomato(Number(e.target.value))}
          />
        </div>
        <div className="bread">
          <label htmlFor="bread"> Bread Price:</label>
          <input
            id="bread"
            type="Number"
            required
            value={bread}
            onChange={e => setBread(Number(e.target.value))}
          />
        </div>
        <div className="coffee">
          <label htmlFor="coffee"> Coffee Price:</label>
          <input
            id="coffee"
            type="Number"
            required
            value={coffee}
            onChange={e => setCoffee(Number(e.target.value))}
          />
        </div>
        <div className="banana">
          <label htmlFor="banana"> Banana Price:</label>
          <input
            id="banana"
            type="Number"
            required
            value={banana}
            onChange={e => setBanana(Number(e.target.value))}
          />
        </div>
        <div className="sugar">
          <label htmlFor="sugar"> Sugar Price:</label>
          <input
            id="sugar"
            type="Number"
            required
            value={sugar}
            onChange={e => setSugar(Number(e.target.value))}
          />
        </div>
        <div className="oil">
          <label htmlFor="oil"> Oil Price:</label>
          <input
            id="oil"
            type="Number"
            required
            value={oil}
            onChange={e => setOil(Number(e.target.value))}
          />
        </div>
        <div className="butter">
          <label htmlFor="butter"> Butter Price:</label>
          <input
            id="butter"
            type="Number"
            required
            value={butter}
            onChange={e => setButter(Number(e.target.value))}
          />
        </div>
        <div type="buttonS">
          <button type="submit">Add</button>
        </div>
      </form>
    </Container>
  );
}
