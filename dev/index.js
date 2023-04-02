const generatePDF = async (name)=>{
    const {PDFDocument,rgb} = PDFLib;
    const exBytes = await fetch("./cert.pdf").then((res) =>{
        return res.arrayBuffer();
    });

    const exFont = await fetch("./Roboto-Black.ttf").then(res =>{
        return res.arrayBuffer()
    }) ;
    
    const pdfDoc = await PDFDocument.load(exBytes);

    pdfDoc.resgisterFontkit(fontkit);

    const myFont = await pdfDoc.embedFont(exFont);

    const pages = pdfDoc.getPages();
    const firstPg = pages[0];

    firstPg.drawText(name, {
        x: 100,
        y: 600,
        font:myFont,
        color:rgb(0,0,0)
    })

    const uri = await pdfDoc.saveAsBase64({dtaUri:true})

    document.querySelector("#mypdf").src = uri;

};

generatePDF(Divyansh);