import { ImageResponse } from "next/og";

export const runtime = "edge"; // default: nodejs

export const alt = "Qhan W";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  // Notice:
  // 为保障使用 fetch 加载字体文件，此文件中 runtime 应设置为 edge
  // 同时获取文章标题方式更改为 API 形式，即在当前目录下添加 api 接口
  // const post = await getPostBySlug(params.slug);
  const isDev = process.env.NODE_ENV === "development";
  const domain = isDev ? `http://localhost:3000` : `https://qhan.wang`;

  const post = await fetch(`${domain}/posts/api?slug=${params.slug}`).then(
    (res) => res.json()
  );

  // Font
  const sacra = fetch(
    new URL("./fonts/Sacramento-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const inter = fetch(
    new URL("./fonts/Inter-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  // const monoton = fetch(new URL("./fonts/Monoton-Regular.ttf", import.meta.url)).then(
  //   (res) => res.arrayBuffer()
  // );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 120,
          // background:
          //   "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",

          background: "linear-gradient(-45deg, #ee7752, #e73c7e)",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: "1 1 20%",
            justifyContent: "flex-end",
          }}
        >
          {/* source: @/public/images/icon.svg */}
          <svg
            viewBox="0 0 64 62"
            style={{ width: 128, height: (128 * 62) / 64 }}
          >
            <g fill="#fff">
              <path d="M36.7683498,-3.55271368e-15 C33.112546,2.33597685 32.207355,8.43579641 32.207355,8.43579641 C32.7066701,6.18741869 27.768999,-3.55271368e-15 27.768999,-3.55271368e-15 C23.4562017,2.99881029 19.8850771,6.18449872 19.6135198,13.6829844 C19.3419625,21.1814701 31.8773983,32.2394006 31.8773983,32.2394006 C33.6585806,19.683525 44.623072,14.0567407 44.623072,14.0567407 C46.138537,5.16542882 36.7683498,-3.55271368e-15 36.7683498,-3.55271368e-15 Z M34.6134112,20.994592 C34.6134112,20.994592 31.0510465,23.914563 31.5211618,31.0217726 C31.5211618,31.0217726 23.1788045,23.8999632 23.6372399,19.3068487 C23.6372399,19.3068487 25.2315441,12.719394 29.0742261,17.9957817 C29.0742261,17.9957817 32.2599145,13.7793435 35.0718466,17.4322273 C35.0835265,17.4293073 35.8310391,19.5900859 34.6134112,20.994592 L34.6134112,20.994592 Z" />
              <path d="M64,26.7509271 C60.6186735,24.0265941 54.5538936,25.0953035 54.5538936,25.0953035 C56.8460709,24.8587859 61.1501082,18.2158517 61.1501082,18.2158517 C56.9424299,15.0768828 52.7902311,12.7146262 45.5895824,14.8170054 C38.3889338,16.9193845 31.8657184,32.3368318 31.8657184,32.3368318 C44.3427548,30.0475745 53.1493875,38.670249 53.1493875,38.670249 C62.078659,37.2745029 64,26.7509271 64,26.7509271 Z M43.4025241,31.3557215 C43.4025241,31.3557215 39.5189626,28.8971059 32.911068,31.5980791 C32.911068,31.5980791 37.0253073,21.4307398 41.5308226,20.4204299 C41.5308226,20.4204299 48.2847157,19.8364356 44.4975132,25.1624629 C44.4975132,25.1624629 49.5081836,26.8502061 46.9298491,30.6753682 C46.9298491,30.6724483 45.125307,32.0652745 43.4054441,31.3557215 L43.4025241,31.3557215 Z" />
              <path d="M46.5978963,61.4314976 C48.2272402,57.4077775 45.4445078,51.912392 45.4445078,51.912392 C46.3350989,54.0381309 53.9416236,56.2310292 53.9416236,56.2310292 C55.7257259,51.2904381 56.7915153,46.6330843 52.688956,40.3522265 C48.5863966,34.0713687 31.9571614,32.3018663 31.9571614,32.3018663 C37.7620639,43.5817145 32.0622804,54.4936464 32.0622804,54.4936464 C35.9604417,62.6432856 46.5978963,61.4314976 46.5978963,61.4314976 Z M36.2261591,43.0531997 C36.2261591,43.0531997 37.452547,38.6236036 32.9557915,33.0814985 C32.9557915,33.0814985 43.8794033,34.0742887 46.1511408,38.0921689 C46.1511408,38.0921689 48.6564759,44.3876265 42.4719772,42.3056871 C42.4719772,42.3056871 42.3084588,47.5879148 37.9022225,46.2301283 C37.8934626,46.2301283 36.033441,44.9044614 36.2173992,43.0531997 L36.2261591,43.0531997 Z" />
              <path d="M8.85035817,55.4582349 C13.1835952,55.7356321 17.5197523,51.3702754 17.5197523,51.3702754 C15.7852895,52.8857404 16.0977264,60.795942 16.0977264,60.795942 C21.3536743,60.9331806 26.1044672,60.4747452 30.7735009,54.5997634 C35.4425347,48.7247816 31.8714101,32.3758636 31.8714101,32.3758636 C22.997618,41.4277739 10.8330185,39.4772332 10.8330185,39.4772332 C4.35068275,45.752251 8.85035817,55.4582349 8.85035817,55.4582349 Z M23.0209778,39.8276297 C23.0209778,39.8276297 27.6111723,39.596952 31.4538542,33.5788917 C31.4538542,33.5788917 33.9562694,44.2601458 30.86986,47.6823519 C30.86986,47.6823519 25.6839914,52.0447887 25.7131911,45.5186534 C25.7131911,45.5186534 20.6470413,47.0282784 20.5477623,42.4176441 C20.5360824,42.4088842 21.2076757,40.2305858 23.0209778,39.8276297 Z" />
              <path d="M2.86449162,17.4128597 C3.92152114,21.6234579 9.40814678,24.4207902 9.40814678,24.4207902 C7.43424634,23.229442 0,25.9391752 0,25.9391752 C1.45998553,30.9819652 3.35504676,35.3736017 10.3717372,38.0278554 C17.3884277,40.6821091 31.8744042,32.3017921 31.8744042,32.3017921 C20.5361565,26.6136885 18.6994947,14.4257293 18.6994947,14.4257293 C10.7367336,10.1713314 2.86449162,17.4128597 2.86449162,17.4128597 Z M22.0779012,26.1464931 C22.0779012,26.1464931 23.6984852,30.4476105 30.5983768,32.2784324 C30.5983768,32.2784324 21.19023,37.9168965 16.9854717,36.0072354 C16.9854717,36.0072354 11.2506485,32.3981512 17.4731069,30.4359306 C17.4731069,30.4359306 14.4918164,26.0705739 18.8513332,24.5697087 C18.8513332,24.5667888 21.1318306,24.543429 22.0779012,26.1464931 Z" />
            </g>
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            flex: "1 1 80%",
            paddingLeft: 60,
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontFamily: "Sacramento",
              fontSize: 80,
              fontWeight: 400,
              color: "#fff",
            }}
          >
            {alt}
          </div>
          <div
            style={{
              fontSize: 48,
              lineHeight: 1.12,
              // color: "rgba(75,85,99)",
              color: "#fff",
            }}
          >
            {post.data}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: await inter, style: "normal", weight: 200 },
        { name: "Sacramento", data: await sacra, style: "normal", weight: 400 },
        // { name: "Monoton", data: await monoton, style: "normal", weight: 400 },
      ],
    }
  );
}