import man1 from './images/ntt-man1.png'
import man2 from './images/ntt-man2.png'
import woman from './images/ntt-woman.png'
export const clients = [
    {
        id: 1,
        fullName: "Daniel Belu",
        profileImg: man1,
        imgBgColor: "",
        active: '1 hour ago',
        crypto: [{eth: '1.2 ETH'}],
        pricePaid: 760,
        techtype:{tech:'ruby'},
        subMessage: "Received $760 for a Ruby project",
        messages:[
            {
                msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices."
            }
        ]
    },
    {
        id:2,
        fullName: "Christophe F. Batista",
        profileImg: man2,
        techtype:{tech:'html'},
        imgBgColor: "#ffabab",
        active: '3 hour ago',
        crypto: [{btc:'0.2 BTC'}],
        pricePaid: 620,
        subMessage: "Received $620 for an html project.",
        messages:[
            {
                msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices."
            }
        ]
    },
    {
        id: 3,
        fullName: "Alice Martin",
        profileImg: woman,
        techtype:{tech:'html'},
        imgBgColor: "#ffd7ab",
        active: '5 hour ago',
        crypto: [{btc:'0.3 BTC'},{eth:'1.2 ETH'}],
        pricePaid: 760,
        subMessage: "Submitted a project in html",
        messages:[
            { 
                msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices.",
            },
            { 
                msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices.",
            }
        ]
    },
]