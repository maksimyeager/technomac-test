import activity1 from "../assets/activities/activity-1.jpg";
import activity2 from "../assets/activities/activity-2.jpg";
import activity3 from "../assets/activities/activity-3.jpg";
import activity4 from "../assets/activities/activity-4.jpg";
import activity5 from "../assets/activities/activity-5.jpg";
import activity6 from "../assets/activities/activity-6.jpg";

import userHelmetSafetySvg from "../assets/icons/user-helmet-safety.svg";
import roadSvg from "../assets/icons/road.svg";
import hesSvg from "../assets/icons/hes.svg";
import gesSvg from "../assets/icons/ges.svg";
import waterPumpSvg from "../assets/icons/water-pump.svg";
import buildingSvg from "../assets/icons/building.svg";

export const activities = [
    {
        name: "Tikinti sahəsinin hazırlanmas",
        imageUrl: activity1,
        icon: userHelmetSafetySvg,
        path: "/activity/tikinti-sahesinin-hazirlanmasi",
        description:
            "Fabrika sahasının alt yapısı, kanalizasyon hattının çekilmesi, çevre derlenmesi. Bina temel kazısı ve hafriyatı. Bütün toprak ve alt yapı işleri.",
        list: [
            "Fabrika sahasının alt yapısı",
            "Kanalizasyon hattının çekilmesi",
            "Cevre derlenmesi",
            "Bina temel kazısı ve hafriyatı",
            "Bütün toprak ve alt yapı işleri",
        ],
    },
    {
        name: "Yol inşaatı",
        imageUrl: activity2,
        icon: roadSvg,
        path: "/activity/yol-insaati",
        description:
            "Demiryolu, otoban, köy yolları, şehir içi yollatın hazırlanması, bütün alt yapı ve asfalt işlerinin görülüp testte geçmiş hali ile teslim edilmesi.",
    },
    {
        name: `HES (Hidro Elektrik Stansiya)`,
        imageUrl: activity3,
        icon: hesSvg,
        path: "/activity/hes-hidro-elektrik-stansiya",
        description:
            "Boru hattının hazırlanması, boruların beton işlerinin yapılması, otomosyon işlerinin görülüp devreye alınması. Çalışık veziyete teslim edilmesi.",
    },
    {
        name: "GES (Güneş Elektrik Stansia)",
        imageUrl: activity4,
        icon: gesSvg,
        path: "/activity/ges-gunes-elektrik-stansiya",
        description:
            "Güneş panellerinin kurulması, arazinin alt yapı hazırlığı, yollar ve panellerin deliklerin delinmesi, panellerin devreye alınması, çalışır vaziyetde teslim edilmesi.",
    },
    {
        name: "Su kanalları",
        imageUrl: activity5,
        icon: waterPumpSvg,
        path: "/activity/su-kanallari",
        description:
            "Derelerin ıslahı, beton revizyon ve yeniden yapılması, kanalların temizliği.",
    },
    {
        name: "Çelik constriction",
        imageUrl: activity6,
        icon: buildingSvg,
        path: "/activity/celik-construction",
        description:
            "Ambarların ve binaların endüstriyel fabrikalatda çelik ve boru işlerinin yapılması.",
    },
];
