import Link from "next/link";
import { RouterLinkConfig } from "../../constants/RouterLink";

export default function Error404() {
  return (
    <div className="bdError">
      <div className="image">
        <picture>
          <img src="/image/Error404.svg" alt="404" />
        </picture>
      </div>
      <h2>Oops! Page Not Found</h2>
      <h3>Rất tiếc! Chúng tôi không thể tìm thấy trang mà bạn tìm kiếm</h3>
      <Link href={RouterLinkConfig.index}>
        <a>
          <button type="button" className="main-btn">Quay lại trang chủ</button>

        </a>
      </Link>
    </div>
  )
}
