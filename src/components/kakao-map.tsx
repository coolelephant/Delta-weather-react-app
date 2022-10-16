import { Map, MapMarker } from "react-kakao-maps-sdk";

interface IKakaoMapProps {
  position: {
    lat: number;
    lng: number;
  };
  onClick: (
    _t: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void;
}
export const KakaoMap = ({ position, onClick }: IKakaoMapProps) => {
  return (
    <Map
      center={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
      style={{ width: "500px", height: "500px" }}
      onClick={onClick}
    >
      {position && <MapMarker position={position} />}
    </Map>
  );
};
