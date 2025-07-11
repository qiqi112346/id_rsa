function createGeoJSONCircle(center, radiusInKm, parentId, points = 64){
    const coords = {
        latitude: center[1],
        longitude: center[0]
    };

    const km = radiusInKm;

    const ret = [];
    const distanceX = km / 111.32;
    const distanceY = km / 110.574;

    let theta;
    let x;
    let y;
    for (let i = 0; i < points; i += 1) {
        theta = (i / points) * (2 * Math.PI);
        x = distanceX * Math.cos(theta);
        y = distanceY * Math.sin(theta);

        ret.push([coords.longitude + x, coords.latitude + y]);
    }
    ret.push(ret[0]);

    return {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [ret]
        },
        properties: {
            parent: parentId
        }
    };
}
module.exports = createGeoJSONCircle;