select * from posts a 
join users b
on a.users_id = b.users_id
where a.userpost =$1 
and a.title ILIKE $2 || '%'