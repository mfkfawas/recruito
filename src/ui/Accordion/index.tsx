import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function WrappedAccordion({ data }) {
  return (
    <div>
      {data.map((item) => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <span className="inline-block text-[2rem] font-semibold leading-[2.5rem] px-4 py-8">
                {item.title}
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="text-[var(--color-text-light)] text-[1.6rem] leading-[2.4rem]">
                {item.description}
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
