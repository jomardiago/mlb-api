const convert = (rows => rows.map(row => (row.error) ? new Error(row.error) : (row.doc) ? row.doc : row.value));

export const entityByType = ((key, db) => 
    new Promise((resolve, reject) => {
        db.view('types', 'byType', key, (err, docs) => {
            if (err) return reject(err);
            let objs = convert(docs.rows);
            resolve(objs);
        });
    }
));