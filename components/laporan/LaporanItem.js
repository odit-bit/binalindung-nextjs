import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button, Typography } from "@material-ui/core";

export default function LaporanItem({ post }) {
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography>{post.judul}</Typography>
          {/* use button tag (link) to see detail page */}
          <Link href="/laporan/[id]" as={`/laporan/${post.slug}`}>
            {"Lihat"}
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
