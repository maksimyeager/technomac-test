import activity1 from "../assets/activities/activity-1.jpg";
import activity2 from "../assets/activities/activity-2.jpg";
import activity3 from "../assets/activities/activity-3.jpg";
import activity4 from "../assets/activities/activity-4.jpg";
import activity5 from "../assets/activities/activity-5.jpg";

import roadSvg from "../assets/icons/road.svg";
import hesSvg from "../assets/icons/hes.svg";
import resSvg from "../assets/icons/res.svg";
import gesSvg from "../assets/icons/ges.svg";
import buildingSvg from "../assets/icons/building.svg";

export const getActivities = (t) => [
    {
        name: t("services.ges"),
        imageUrl: activity1,
        icon: gesSvg,
        path: "/activity/ges",
        description:
            "Fabrika sahasının alt yapısı, kanalizasyon hattının çekilmesi,Peyzaj,Otoyol ve Demiryolu, Toprak altyapısı,",
        images: [
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/2/1.jpg?updatedAt=1736695187540",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/2/2.jpg?updatedAt=1736695189662",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/2/3.jpg?updatedAt=1736695189518",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/2/4.jpg?updatedAt=1736695188408",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/2/5.jpg?updatedAt=1736695189273",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/2/6.jpg?updatedAt=1736695189481",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/2/7.jpg?updatedAt=1736695188176",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/2/8.jpg?updatedAt=1736695191195",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/2/9.jpg?updatedAt=1736695191288",
        ],
    },
    {
        name: t("services.res"),
        imageUrl: activity2,
        icon: resSvg,
        path: "/activity/res",
        description:
            "Fabrika sahasının alt yapısı, kanalizasyon hattının çekilmesi,Peyzaj,Otoyol ve Demiryolu, Toprak altyapısı,",
        images: [
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/3/1.jpg?updatedAt=1736695182298",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/3/2.jpg?updatedAt=1736695182046",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/3/3.jpg?updatedAt=1736695183325",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/3/4.jpg?updatedAt=1736695186082",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/3/5.jpg?updatedAt=1736695186474",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/3/6.jpg?updatedAt=1736695186110",
        ],
    },
    {
        name: t("services.hes"),
        imageUrl: activity3,
        icon: hesSvg,
        path: "/activity/hes",
        description:
            "Fabrika sahasının alt yapısı, kanalizasyon hattının çekilmesi,Peyzaj,Otoyol ve Demiryolu, Toprak altyapısı,",
        images: [
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/4/1.jpg?updatedAt=1736695177798",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/4/2.jpg?updatedAt=1736695180361",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/4/3.jpg?updatedAt=1736695181065",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/4/4.jpg?updatedAt=1736695180800",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/4/5.jpg?updatedAt=1736695182718",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/4/6.jpg?updatedAt=1736695182388",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/4/7.jpg?updatedAt=1736695182381",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/4/8.jpg?updatedAt=1736695182284",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/4/9.jpg?updatedAt=1736695181371",
        ],
    },
    {
        name: t("services.foundation"),
        imageUrl: activity4,
        icon: roadSvg,
        path: "/activity/altyapı-insaat",
        description:
            "Fabrika sahasının alt yapısı, kanalizasyon hattının çekilmesi,Peyzaj,Otoyol ve Demiryolu, Toprak altyapısı.",
        images: [
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/1/1.jpg?updatedAt=1736695191924",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/1/2.jpg?updatedAt=1736695192017",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/1/3.jpg?updatedAt=1736695194974",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/1/4.jpg?updatedAt=1736695195092",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/1/5.jpg?updatedAt=1736695195659",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/1/6.jpg?updatedAt=1736695195493",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/1/7.jpg?updatedAt=1736695196151",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/1/8.jpg?updatedAt=1736695196242",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/1/8.jpg?updatedAt=1736695196242",
        ],
    },
    {
        name: t("services.steel"),
        imageUrl: activity5,
        icon: buildingSvg,
        path: "/activity/celik-construction",
        description: "üretim ve montaj.",
        images: [
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/5/1.jpg?updatedAt=1736695177937",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/5/2.jpg?updatedAt=1736695177333",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/5/3.jpg?updatedAt=1736695177957",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/5/4.jpg?updatedAt=1736695177806",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/5/5.jpg?updatedAt=1736695177334",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/5/6.jpg?updatedAt=1736695178082",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/5/7.jpg?updatedAt=1736695178135",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/5/8.jpg?updatedAt=1736695177999",
            "https://ik.imagekit.io/httcx7fwtr/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9C%D0%B0%D0%BA/5/9.jpg?updatedAt=1736695178138",
        ],
    },
];
