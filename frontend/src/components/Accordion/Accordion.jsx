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

// Imgs
import desc from "../../assets/imgs/descriptionImg.jpg";

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 16,
}));

export default function (props) {
  const [showCommentsArr, setShowCommentsArr] = useState([]);
  const [showCommentsNum, setShowCommentsNum] = useState(4);
  const [expanded, setExpanded] = React.useState("panel1");

  useEffect(() => {
    setShowCommentsArr(props.comments.slice(0, showCommentsNum));
  }, [showCommentsNum]);

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
          <Typography className="flex flex-col gap-1.5">
            <div>
              <span className="text-zinc-700 font-danaBold ml-5 ">وزن:</span>
              <span className="text-gray-400 font-dana text-sm">
                50 کیلوگرم
              </span>
            </div>
            <div>
              <span className="text-zinc-700 font-danaBold ml-5 ">عرض:</span>
              <span className="text-gray-400 font-dana text-sm">
                50 سانتی متر
              </span>
            </div>
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
          {showCommentsArr.map((el) => (
            <Typography key={Math.random()}>
              <div className="font-dana bg-gray-100 py-4 px-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-dana lg:font-danaBold lg:text-xl">
                    احمد
                  </span>
                  <span className="font-dana text-sm">2 روز پیش</span>
                </div>
                <p className="line-clamp-4 mt-1.5 text-sm">
                  که با چند ویژگی جدید و دوربین چهارگانه روانه بازار شده است.
                  اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول چند سال
                  اخیرش استفاده کرده است. نمایشگر آیفون 12 Pro MAX به پنل Super
                  Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه
                  کند. این نمایشگر رزولوشن بسیار بالایی دارد؛
                </p>
              </div>
            </Typography>
          ))}
          <button
            onClick={() => {
              setShowCommentsNum((prev) => {
                if (props.comments.length > showCommentsNum - 4) {
                  return prev + 4;
                }
              });
            }}
            className="font-dana w-[100px] text-sm mx-auto text-zinc-700 py-1 px-2 rounded-lg border border-solid border-orange-300 transition-all hover:bg-orange-100 "
          >
            بیشتر
          </button>
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
          <Typography>
            <div className="product-desc">
              <h3>آیفون جدید؛ سروصدای جدید</h3>
              <img src={desc} alt="img" />
              <p>
                در ماه اکتبر 2020، اپل بازهم با تشریفات و سروصدای همیشگی نسل
                جدید آیفون را روانه بازار کرد تا بتواند بازار پررونقی برای سری
                گوشی‌های جدیدش دست‌وپا کند. خانواده جدید اپل امسال پرجمعیت‌تر از
                همیشه و با 4 عضو ظاهر شده است؛ iPhone 12، 12mini، 12pro و 12pro
                max. درست است که آیفون 12پرو در مقایسه با آیفون 12، قاب فولاد
                مستحکمی دارد و در حافظه و رنگ‌های بیشتری عرضه شده اما به‌جرئت
                می‌توان گفت اپل، پسوند pro را بیشتر به دلیل قابلیت‌های بیشتر
                دوربین به این گوشی چسبانده است. حسگر LiDAR و قابلیت زوم اپتیکال
                2برابر، دیگر ویژگی‌هایی هستند که نسخه پرو را متمایز کرده‌اند.
                البته اگر iPhone 11 Pro را هم در این مقایسه بگنجانیم، تفاوت‌ها
                خیلی بیشتر هم می‌شود؛ درست است که از LiDAR صحبت کردیم اما اجازه
                دهید صرفاً برای تأکید دوباره اسمی از این سنسور جدید ببریم.
                درکنار این سنسور، تراشه سریع‌تر، شبکه ارتباطی 5G، مقاومت بیشتر
                دربرابر ضربه، حالت شب بهتر دوربین، Dolby Vision برای ضبط ویدئو و
                فناوری جدید MagSafe هم در این محصول جدید دیده می‌شوند.
              </p>
              <h3>آیفون جدید؛ سروصدای جدید</h3>
              <img src={desc} alt="img" />
              <p>
                در ماه اکتبر 2020، اپل بازهم با تشریفات و سروصدای همیشگی نسل
                جدید آیفون را روانه بازار کرد تا بتواند بازار پررونقی برای سری
                گوشی‌های جدیدش دست‌وپا کند. خانواده جدید اپل امسال پرجمعیت‌تر از
                همیشه و با 4 عضو ظاهر شده است؛ iPhone 12، 12mini، 12pro و 12pro
                max. درست است که آیفون 12پرو در مقایسه با آیفون 12، قاب فولاد
                مستحکمی دارد و در حافظه و رنگ‌های بیشتری عرضه شده اما به‌جرئت
                می‌توان گفت اپل، پسوند pro را بیشتر به دلیل قابلیت‌های بیشتر
                دوربین به این گوشی چسبانده است. حسگر LiDAR و قابلیت زوم اپتیکال
                2برابر، دیگر ویژگی‌هایی هستند که نسخه پرو را متمایز کرده‌اند.
                البته اگر iPhone 11 Pro را هم در این مقایسه بگنجانیم، تفاوت‌ها
                خیلی بیشتر هم می‌شود؛ درست است که از LiDAR صحبت کردیم اما اجازه
                دهید صرفاً برای تأکید دوباره اسمی از این سنسور جدید ببریم.
                درکنار این سنسور، تراشه سریع‌تر، شبکه ارتباطی 5G، مقاومت بیشتر
                دربرابر ضربه، حالت شب بهتر دوربین، Dolby Vision برای ضبط ویدئو و
                فناوری جدید MagSafe هم در این محصول جدید دیده می‌شوند.
              </p>
              <h3>آیفون جدید؛ سروصدای جدید</h3>
              <img src={desc} alt="img" />
              <p>
                در ماه اکتبر 2020، اپل بازهم با تشریفات و سروصدای همیشگی نسل
                جدید آیفون را روانه بازار کرد تا بتواند بازار پررونقی برای سری
                گوشی‌های جدیدش دست‌وپا کند. خانواده جدید اپل امسال پرجمعیت‌تر از
                همیشه و با 4 عضو ظاهر شده است؛ iPhone 12، 12mini، 12pro و 12pro
                max. درست است که آیفون 12پرو در مقایسه با آیفون 12، قاب فولاد
                مستحکمی دارد و در حافظه و رنگ‌های بیشتری عرضه شده اما به‌جرئت
                می‌توان گفت اپل، پسوند pro را بیشتر به دلیل قابلیت‌های بیشتر
                دوربین به این گوشی چسبانده است. حسگر LiDAR و قابلیت زوم اپتیکال
                2برابر، دیگر ویژگی‌هایی هستند که نسخه پرو را متمایز کرده‌اند.
                البته اگر iPhone 11 Pro را هم در این مقایسه بگنجانیم، تفاوت‌ها
                خیلی بیشتر هم می‌شود؛ درست است که از LiDAR صحبت کردیم اما اجازه
                دهید صرفاً برای تأکید دوباره اسمی از این سنسور جدید ببریم.
                درکنار این سنسور، تراشه سریع‌تر، شبکه ارتباطی 5G، مقاومت بیشتر
                دربرابر ضربه، حالت شب بهتر دوربین، Dolby Vision برای ضبط ویدئو و
                فناوری جدید MagSafe هم در این محصول جدید دیده می‌شوند.
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
