import { useState, useEffect } from "react";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

// Icons
import { FaStar } from "react-icons/fa";

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 16,
}));

export default function (props) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="my-4">
      <Accordion
        defaultExpanded
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="font-danaBold mr-2">مشخصات محصول</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="flex flex-col gap-2.5">
            {props.details &&
              props?.details?.map((el) => (
                <div key={Math.random()} className="flex items-center">
                  <span className="text-zinc-700 font-danaBold ml-5 ">
                    {el.title}:
                  </span>
                  <span className="text-gray-400 font-dana text-sm line-clamp-1">
                    {el.value}
                  </span>
                </div>
              ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="font-danaBold mr-2">نظرات</Typography>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-2.5">
          <div className="divide-y divide-gray-100 divide-solid">
            {props.comments &&
              props?.comments?.map((el) => (
                <Typography key={Math.random()}>
                  <div className="p-4">
                    <div className="flex items-center gap-1 font-dana  text-sm text-gray-400">
                      <div>کاربر تیمچه</div>
                      <span className="bg-teal-400/50 py-1 px-2 rounded-lg font-danaBold text-xs text-gray-700 mr-1">
                        خریدار
                      </span>
                      <span className="mx-3">|</span>
                      <span>
                        {el.createdAt
                          .split(``)
                          .slice(0, el.createdAt.split(``).indexOf(`T`))}
                      </span>
                    </div>
                    <div className="mt-2.5 flex gap-0.5 items-center text-[#facc15]">
                      {Array(Math.floor(el.score))
                        .fill(0)
                        .map(() => (
                          <FaStar key={Math.random()} size="1rem" />
                        ))}
                    </div>
                    <p className="font-dana mt-4 text-zinc-700 sm:text-base text-sm">
                      {el.body}
                    </p>
                  </div>
                </Typography>
              ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="font-danaBold mr-2">توضیحات</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="product-desc inline-block">
            {props.desc}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
