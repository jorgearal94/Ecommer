const leyenda =`Bienvenido`;
const leyenda2 =`No responder`;

const Partials = {
  getHead: () => {
    return `
      <head>
        <meta charset="utf-8">
        <style type="text/css">
            @media screen {
                @font-face {
                    font-family: "Lato";
                    font-style: normal;
                    font-weight: 400;
                    src: local("Lato Regular"), local("Lato-Regular"), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format("woff");
                }
                @font-face {
                    font-family: "Lato";
                    font-style: normal;
                    font-weight: 700;
                    src: local("Lato Bold"), local("Lato-Bold"), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format("woff");
                }
                @font-face {
                    font-family: "Lato";
                    font-style: italic;
                    font-weight: 400;
                    src: local("Lato Italic"), local("Lato-Italic"), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format("woff");
                }
                @font-face {
                    font-family: "Lato";
                    font-style: italic;
                    font-weight: 700;
                    src: local("Lato Bold Italic"), local("Lato-BoldItalic"), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format("woff");
                }
            }
        </style>
    </head>
    `
  },
  getHeader: () => {
    return `
      <table border="0" width="100%" style="background-color: white;">
        <tbody>
        <tr>
            <td></td>
            <td style="width:695px;">
            <img src="cid:banner" style="width: 100%; height: auto;">
            </td>
            <td></td>
        </tr>
        </tbody>
    </table>
    `
  },
  getFooter: () => {
    return `
      <table border="0" width="100%">
          <tbody>
          <tr>
              <td></td>
              <td style="width:695px;background-color:rgb(11, 60, 92); padding:20px 0px">
              <div style="margin: auto; text-align: center;" >
                  
              </div>
              <div style="padding:10px 0px;text-align: center;">
                  <span style="color:white;font-size:11px;">${leyenda}</span>
                  <br>
                  <span style="color:white;font-size:11px;">${leyenda2}</span>
              </div>
              </td>
              <td></td>
          </tr>
          </tbody>
      </table>
    `
  }
};
export default Partials