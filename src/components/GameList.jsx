import { useNavigate } from 'react-router'
const games = [
    { name: "1 + 2 + 3", image: "https://agamecdn.com/system/static/thumbs/spil_thumb_big/33081/original_200X120_170985_1508228217.png?1692361136", url: "/alphabet" },
    { name: "Dr.Panda School", image: "https://agamecdn.com/system/static/thumbs/spil_thumb_big/35387/original_200X120_178078_1630673085.png?1692362648", url: "/game2" },
    { name: "Kids Coloring", image: "https://agamecdn.com/system/static/thumbs/spil_thumb_big/89769/original_Kids-Coloring-200x120.png?1713178111", url: "/game3" },
    { name: "Kids Jigsaw Puzzles: Zoo Fun", image: "https://agamecdn.com/system/static/thumbs/spil_thumb_big/34583/original_200X120_176516_1566387449.png?1692362119", url: "/game4" },
  ];
  
  // Fungsi untuk mengelompokkan data jadi per 2 item
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };
  
  export function GameList() {
    const nav = useNavigate()
    const rows = chunkArray(games, 2);
  
    return (
      <scroll-view scroll-orientation="vertical" style="padding:10px;">
        {rows.map((row, rowIndex) => (
          <view
            key={rowIndex}
            style="display: flex; justify-content: space-between; "
          >
            {row.map((game) => (
              <view
                key={game.url}
                style="flex: 1; border: 1px solid #ccc; border-radius: 8px; padding: 8px;margin: 6px;"
                bindtap={() => nav(game.url)}
              >
                <image
                  src={game.image}
                  style="width: 100%; height: 100px; border-radius: 6px;"
                />
                <text style="margin-top: 6px;text-align: center;">{game.name}</text>
              </view>
            ))}
            {row.length < 2 && (
              <view style="flex: 1;" />  
            )}
          </view>
        ))}
      </scroll-view>
    );
  };
  