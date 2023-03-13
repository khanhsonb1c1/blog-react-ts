import ContainerListAlbum from "../../components/layout/ContainerListAlbum";
import AlbumCardSmall from "../../components/layout/card/AlbumCardSmall";
import { dataListRecently } from "../../data/listRecently";

Recently.propTypes = {};

function Recently() {
  return (
    <div className="home-page__row">
      <ContainerListAlbum title={"Gần đây"}>
        {dataListRecently.map((item) => (
          <AlbumCardSmall item={item} />
        ))}
      </ContainerListAlbum>
    </div>
  );
}

export default Recently;