// components/PDFViewer.js
import '../utilities/PDFViewer.scss'
const PDFViewerComponent = () => {


 return <div className='iframe-component'>
 <iframe
   src="/assets/resume/ANTHONY_IVERY_-_Software_Developer.pdf"
   width="100%"
   height="100%"
   type="application/pdf"
 />
</div>
};

export default PDFViewerComponent;