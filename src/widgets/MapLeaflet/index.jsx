import { Map, MapTileLayer, MapZoomControl, MapMarker, MapPopup, Button } from '@shared/ui'
export const MapLeaflet = () => {
    return (
        <div className='pt-8 pb-8 border-b'>
            <h2 className='font-medium text-2xl'>Where you’ll be</h2>
            <Map center={[43.6532, -79.3832]} classNames='mt-6'>
                <MapTileLayer />
                <MapZoomControl />
                <MapMarker position={[43.6532, -79.3832]}>
                    <MapPopup>Exact location provided after booking</MapPopup>
                </MapMarker>
            </Map>
            <h3 className='font-medium mt-6'>Bordeaux, Nouvelle-Aquitaine, France</h3>
            <p className='text-base mt-4'>Very dynamic and appreciated district by the people of Bordeaux thanks to rue St James and place Fernand Lafargue. Home to many historical monuments such as the Grosse Cloche, the Porte de Bourgogne and the Porte Cailhau, and cultural sites such as the Aquitaine Museum.</p>
            <Button variant="link" className="pl-0 underline mt-6">
                Show more
            </Button>
        </div>
    );
}