import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main/Main';

import Brand1 from './pages/Brand/Brand1';
import Brand2 from './pages/Brand/Brand2';

import BusinessGuide1 from './pages/BusinessGuide/BusinessGuide1';
import BusinessGuide2 from './pages/BusinessGuide/BusinessGuide2';
import BusinessGuide3 from './pages/BusinessGuide/BusinessGuide3';

import LocationEnvironment1 from './pages/LocationEnvironment/LocationEnvironment1';
import LocationEnvironment2 from './pages/LocationEnvironment/LocationEnvironment2';

import ComplexGuide1 from './pages/ComplexGuide/ComplexGuide1';
import ComplexGuide2 from './pages/ComplexGuide/ComplexGuide2';
import ComplexGuide3 from './pages/ComplexGuide/ComplexGuide3';

import FloorPlan1 from './pages/FloorPlan/FloorPlan1';
import FloorPlan2 from './pages/FloorPlan/FloorPlan2';
import FloorPlan3 from './pages/FloorPlan/FloorPlan3';
import FloorPlan4 from './pages/FloorPlan/FloorPlan4';
import FloorPlan5 from './pages/FloorPlan/FloorPlan5';
import FloorPlan6 from './pages/FloorPlan/FloorPlan6';
import FloorPlanVideos from './pages/FloorPlan/FloorPlanVideos';

import Interior1 from './pages/Interior/Interior1';
import Interior2 from './pages/Interior/Interior2';
import Interior3 from './pages/Interior/Interior3';

import SalesInfoGuide from './pages/SalesInfo/SalesInfoGuide'; // 추가된 페이지
import SalesInfoAnnouncement from './pages/SalesInfo/SalesInfoAnnouncement'; // 추가된 페이지
import SalesInfoStampTax from './pages/SalesInfo/SalesInfoStampTax'; // 추가된 페이지
import SubscriptionGuide from './pages/SalesInfo/SubscriptionGuide';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />

          <Route path="/Brand/intro" element={<Brand1 />} />
          <Route path="/Brand/video" element={<Brand2 />} />

          <Route path="/BusinessGuide/intro" element={<BusinessGuide1 />} />
          <Route path="/BusinessGuide/plan" element={<BusinessGuide2 />} />
          <Route path="/BusinessGuide/documents" element={<BusinessGuide3 />} />

          <Route path="/LocationEnvironment/intro" element={<LocationEnvironment1 />} />
          <Route path="/LocationEnvironment/primium" element={<LocationEnvironment2 />} />
          
          <Route path="/ComplexGuide/intro" element={<ComplexGuide1 />} />
          <Route path="/ComplexGuide/detailintro" element={<ComplexGuide2 />} />
          <Route path="/ComplexGuide/community" element={<ComplexGuide3 />} />

          <Route path="/FloorPlan/59A" element={<FloorPlan1 />} />
          <Route path="/FloorPlan/59B" element={<FloorPlan2 />} />
          <Route path="/FloorPlan/84A" element={<FloorPlan3 />} />
          <Route path="/FloorPlan/84B" element={<FloorPlan4 />} />
          <Route path="/FloorPlan/114A" element={<FloorPlan5 />} />
          <Route path="/FloorPlan/114B" element={<FloorPlan6 />} />
          <Route path="/FloorPlan/videos" element={<FloorPlanVideos />} /> 
          
          <Route path="/Interior/59A" element={<Interior1 />} />
          <Route path="/Interior/84A" element={<Interior2 />} />
          <Route path="/Interior/84B" element={<Interior3 />} />

          {/* 추가된 분양안내 관련 경로 */}
          <Route path="/SalesInfo/guide" element={<SalesInfoGuide />} />
          <Route path="/SalesInfo/SubscriptionGuide" element={<SubscriptionGuide/>} />
          <Route path="/SalesInfo/announcement" element={<SalesInfoAnnouncement />} />
          <Route path="/SalesInfo/StampTax" element={<SalesInfoStampTax />} />

          <Route path="/*" element={<h1>Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
