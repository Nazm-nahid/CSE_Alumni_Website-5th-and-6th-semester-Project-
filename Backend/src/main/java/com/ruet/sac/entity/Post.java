package com.ruet.sac.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "post")
public class Post {
    @Id
    @Column(name = "post_id", nullable = false)
    private Integer id;

    @Lob
    @Column(name = "post_title")
    private String postTitle;

    @Lob
    @Column(name = "post_description")
    private String postDescription;

    @Lob
    @Column(name = "post_image")
    private String postImage;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_woner_id")
    private Alumnus postWoner;

    @Column(name = "post_date")
    private LocalDate postDate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPostTitle() {
        return postTitle;
    }

    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public String getPostDescription() {
        return postDescription;
    }

    public void setPostDescription(String postDescription) {
        this.postDescription = postDescription;
    }

    public String getPostImage() {
        return postImage;
    }

    public void setPostImage(String postImage) {
        this.postImage = postImage;
    }

    public Alumnus getPostWoner() {
        return postWoner;
    }

    public void setPostWoner(Alumnus postWoner) {
        this.postWoner = postWoner;
    }

    public LocalDate getPostDate() {
        return postDate;
    }

    public void setPostDate(LocalDate postDate) {
        this.postDate = postDate;
    }

}