import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Just Shop telegram kanali bormi ?
        </AccordionSummary>
        <AccordionDetails>
          Ha albatta bor siz ushbu manzil orqali <b>Just Shop</b> Telegram
          kanalga tashrif buyurasiz{" "}
          <a href="https://t.me/Just_shopstore" target="_blank">
            Shu yerda
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Mahsulotni qaytarib berish bormi ?
        </AccordionSummary>
        <AccordionDetails>
          Albatta Klent hohishiga qarab mahsulot pulini yoki o'ringa o'rin
          almashtiriladi
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Do'kon Manzili qayerda ?
        </AccordionSummary>
        <AccordionDetails>
          Do'kon manzilini o'zingizga qulay Xaritadan foydalanib ko'ring{" "}
          <a
            href="https://www.google.com/maps/@40.1382466,67.8219871,21z?entry=ttu"
            target="_blank"
          >
            Manzilni ko'rish
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Mahsulot qancha yetkaziladi ?
        </AccordionSummary>
        <AccordionDetails>
          Mahsulot zakaz berilgandan ketn 12 soat ichida yetkaziladi agar siz Mahsulot buyurtma berganingizdan song 1 soat ichida  call markaz aloqaga chiqmasa iltimos quydagi raqamlarga telfon qiling <br /> <b>+90 311 22 11, +91 197 77 09</b>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Just Shop viloyatlarga ham Mahsulot Yatkazib beradmi ?
        </AccordionSummary>
        <AccordionDetails>
          Ha Albatta o'ziznizga yaqin joylashgan pochta yoki taksi xizmatidan foydalaniladi.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
