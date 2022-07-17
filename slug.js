import { db } from '../../../libs/firebase';

export default async (req, res) => {
  if (req.method === 'POST') {
    const ref = db.ref('views').child(req.query.slug);
    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) {
        return 1;
      }

      return currentViews + ;
    });

    return res.status(200).json({
      total: snapshot.val()
    });
  }
};
