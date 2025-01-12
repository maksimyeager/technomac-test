import Greyder from "../assets/machines/greyder.jpg";
import Katok from "../assets/machines/katok.jpg";
import Manipulator from "../assets/machines/manipulator.jpg";
import Eskavator from "../assets/machines/eskavator.jpg";
import Buldozer from "../assets/machines/buldozer.jpg";
import TeleskopikForklift from "../assets/machines/teleskopik-forklift.jpg";
import YanaqmaqMasini from "../assets/machines/yanacaq-masini.jpg";
import Kran from "../assets/machines/kran.jpg";
import Generator from "../assets/machines/generator.jpg";
import Konteyner from "../assets/machines/konteyner.jpg";
import Manlift from "../assets/machines/manlift.jpg";
import SicissorLift from "../assets/machines/sicissor-lift.jpg";
import Forklift from "../assets/machines/forklift.jpg";

export const getMachines = (t) => [
    { name: t("machinery.greyder"), imageUrl: Greyder, path: "/machine/greyder" },
    { name: t("machinery.katok"), imageUrl: Katok, path: "/machine/katok" },
    { name: t("machinery.manipulyator"), imageUrl: Manipulator, path: "/machine/manipulyator" },
    { name: t("machinery.ekskavator"), imageUrl: Eskavator, path: "/machine/ekskavator" },
    { name: t("machinery.buldozer"), imageUrl: Buldozer, path: "/machine/buldozer" },
    {
        name: t("machinery.teleskopik-forklift"),
        imageUrl: TeleskopikForklift,
        path: "/machine/teleskopik-forklift",
    },
    {
        name: t("machinery.yanacaq-mashini"),
        imageUrl: YanaqmaqMasini,
        path: "/machine/yanacaq-mashini",
    },
    { name: t("machinery.kran"), imageUrl: Kran, path: "/machine/kran" },
    { name: t("machinery.generator"), imageUrl: Generator, path: "/machine/generator" },
    { name: t("machinery.konteyner"), imageUrl: Konteyner, path: "/machine/konteyner" },
    { name: t("machinery.manlift"), imageUrl: Manlift, path: "/machine/manlift" },
    {
        name: t("machinery.sicissor-lift"),
        imageUrl: SicissorLift,
        path: "machine/sicissor-lift",
    },
    { name: t("machinery.forklift"), imageUrl: Forklift, path: "/machine/forklift" },
];
