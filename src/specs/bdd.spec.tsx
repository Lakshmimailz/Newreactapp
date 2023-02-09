import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "../App"

test("It should be able to create new players", async () => {
    render(<App/>);
const player1 = await screen.findByText(/Lux/);
const player2 = await screen.findByText(/Marcus/)
})




test("It should be able to create new players", async () => {
    render(<App/>)
 
    const fnameInput = await screen.findByPlaceholderText("jim");
    const lnameInput = await screen.findByPlaceholderText("smith");
    const heightInput = await screen.findByPlaceholderText("72");
    const weightInput = await screen.findByPlaceholderText("200");
    const shotAttemptsInput = await screen.findByPlaceholderText("24");
    const madeBasketsInput = await screen.findByPlaceholderText("25");
    const blocksInput = await screen.findByPlaceholderText("12");
    const reboundsInput = await screen.findByPlaceholderText("67");
    const assistsInput= await screen.findByPlaceholderText("54");
    const addButton = await screen.findByText(/Add Player/);

    userEvent.type(fnameInput,"Lux");
    userEvent.type(lnameInput,"Raj");
    userEvent.type(heightInput,"72");
    userEvent.type(weightInput,"170");

    const frank = await screen.findByText(/rith/);

    screen.debug();
})

