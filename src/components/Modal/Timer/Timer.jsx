import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function BasicTimePicker() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimePicker"]} >
          <TimePicker label="Escolha o horário"/>
        </DemoContainer>
          <button type="button" onClick="" className="atendimento">
            Agendar
          </button>
      </LocalizationProvider>
    </>
  );
}
