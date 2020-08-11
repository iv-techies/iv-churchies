import thumb1 from "./assets/images/christopher-sardegna-bSmKli4OTIY-unsplash 1 .png";
import thumb2 from "./assets/images/melissa-askew-tSlvoSZK77c-unsplash 1 .png";
import thumb3 from "./assets/images/rayul-_M6gy9oHgII-unsplash 1 .png";
import thumb4 from "./assets/images/billy-pasco-se3tHNszbkM-unsplash 1 .png";
import thumb5 from "./assets/images/warren-wong-tHiGKAJxaA8-unsplash 1 .png";
import Cross from "./assets/videos/Cross - 7335.mp4";
import Week from "./assets/videos/Holy Week - 23879.mp4";

const videos =
    [
        {
            id: 1,
            src: `${ Cross }`,
            creator: "jane doe",
            createdAt: new Date().getTime(),
            title: "A family that stands together",
            thumbnail: thumb1
        },
        {
            id: 2,
            src: `${ Week }`,
            creator: "jane doe",
            createdAt: new Date().getTime(),
            title: "A family that stands together",
            thumbnail: thumb2
        },
        {
            id: 3,
            src: `${ Cross }`,
            creator: "jane doe",
            createdAt: new Date().getTime(),
            title: "A family that stands together",
            thumbnail: thumb3
        },
    ];

const readings =
{
    catholic:
    {
        createdAt: new Date().getTime(),
        thumbnail: thumb4,
        text: "Lorem ipsum dolor sit amet, deserunt hendrerit prodesset nec ut, unum maiestatis conclusionemque nec ex. Admodum perfecto platonem eum ne, est alii decore an, ei vim nusquam praesent. No eos verear voluptaria neglegentur. Utamur dignissim vel an, nec ex inani propriae atomorum. \n\n Vim rebum consul an, eu conceptam voluptatibus pro. Ea postea vocent praesent duo, alia fugit qui ne. Ad usu regione meliore intellegat, oporteat omittantur nec ad. Quo eu falli torquatos, ex utroque placerat eos. Est dico oblique no. Probo vivendum accusamus ad cum, minim percipitur eu usu, no habeo petentium qui.\n\n Vim rebum consul an, eu conceptam voluptatibus pro. Ea postea vocent praesent duo, alia fugit qui ne. Ad usu regione meliore intellegat, oporteat omittantur nec ad. Quo eu falli torquatos, ex utroque placerat eos. Est dico oblique no. Probo vivendum accusamus ad cum, minim percipitur eu usu, no habeo petentium qui.\n\n Vim rebum consul an, eu conceptam voluptatibus pro. Ea postea vocent praesent duo, alia fugit qui ne. Ad usu regione meliore intellegat, oporteat omittantur nec ad. Quo eu falli torquatos, ex utroque placerat eos. Est dico oblique no. Probo vivendum accusamus ad cum, minim percipitur eu usu, no habeo petentium qui.\n\n Vim rebum consul an, eu conceptam voluptatibus pro. Ea postea vocent praesent duo, alia fugit qui ne. Ad usu regione meliore intellegat, oporteat omittantur nec ad. Quo eu falli torquatos, ex utroque placerat eos. Est dico oblique no. Probo vivendum accusamus ad cum, minim percipitur eu usu, no habeo petentium qui.\n\n Vim rebum consul an, eu conceptam voluptatibus pro. Ea postea vocent praesent duo, alia fugit qui ne. Ad usu regione meliore intellegat, oporteat omittantur nec ad. Quo eu falli torquatos, ex utroque placerat eos. Est dico oblique no. Probo vivendum accusamus ad cum, minim percipitur eu usu, no habeo petentium qui.\n\n Vim rebum consul an, eu conceptam voluptatibus pro. Ea postea vocent praesent duo, alia fugit qui ne. Ad usu regione meliore intellegat, oporteat omittantur nec ad. Quo eu falli torquatos, ex utroque placerat eos. Est dico oblique no. Probo vivendum accusamus ad cum, minim percipitur eu usu, no habeo petentium qui."
    },
    pentecostal:
    {
        createdAt: new Date().getTime(),
        thumbnail: thumb5,
        text: "Lorem ipsum dolor sit amet, deserunt hendrerit prodesset nec ut, unum maiestatis conclusionemque nec ex. Admodum perfecto platonem eum ne, est alii decore an, ei vim nusquam praesent. No eos verear voluptaria neglegentur. Utamur dignissim vel an, nec ex inani propriae atomorum. \n\n Vim rebum consul an, eu conceptam voluptatibus pro. Ea postea vocent praesent duo, alia fugit qui ne. Ad usu regione meliore intellegat, oporteat omittantur nec ad. Quo eu falli torquatos, ex utroque placerat eos. Est dico oblique no. Probo vivendum accusamus ad cum, minim percipitur eu usu, no habeo petentium qui.\n\n Vim rebum consul an, eu conceptam voluptatibus pro. Ea postea vocent praesent duo, alia fugit qui ne. Ad usu regione meliore intellegat, oporteat omittantur nec ad. Quo eu falli torquatos, ex utroque placerat eos. Est dico oblique no. Probo vivendum accusamus ad cum, minim percipitur eu usu, no habeo petentium qui.\n\n Vim rebum consul an, eu conceptam voluptatibus pro. Ea postea vocent praesent duo, alia fugit qui ne. Ad usu regione meliore intellegat, oporteat omittantur nec ad. Quo eu falli torquatos, ex utroque placerat eos. Est dico oblique no. Probo vivendum accusamus ad cum, minim percipitur eu usu, no habeo petentium qui.\n\n Vim rebum consul an, eu conceptam voluptatibus pro. Ea postea vocent praesent duo, alia fugit qui ne. Ad usu regione meliore intellegat, oporteat omittantur nec ad. Quo eu falli torquatos, ex utroque placerat eos. Est dico oblique no. Probo vivendum accusamus ad cum, minim percipitur eu usu, no habeo petentium qui."
    }
};

export default videos;

export { readings };