import { FaHeart, FaPencil, FaTrashCan   } from "react-icons/fa6";

// styles
import styles from "./styles/PostCard.module.css";
import { NavLink } from "react-router";

const PostCard = ({id, title, content, user}) => {
    const {name, email} = user;
    const isLogin = false;
    return (
        <>
            <div className={styles['card']}>
                <div className={styles['card-header']}>
                    <NavLink to={`/post/${id}`}>
                        <h1 className={styles["card-title"]}>{title}</h1>
                    </NavLink>
                    <p className={styles["card-author"]}>by: {name}</p>
                </div>
                <div className={styles["card-body"]}>
                    <img className="card-image w-full h-[200px] object-cover rounded-md" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="food" />
                    <p className={styles["card-content"]}>{content}</p>
                </div>
                <div className={styles["card-icon"]}>
                    {!isLogin ? (
                        <FaHeart className="hover:text-rose-600"/>
                    ): (
                        <>
                            <FaPencil className="hover:text-rose-600"/>
                            <FaTrashCan className="hover:text-rose-600"/>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default PostCard;